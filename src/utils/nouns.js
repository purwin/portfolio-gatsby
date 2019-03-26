var model = {

  nouns: ['ebooks', 'websites', 'graphics', 'GIFs', 'buttons', 'web apps', 'risographs', 'videos', 'applescripts', 'printed matter', 'posters', 'python scripts', 'databases', 'tables', 'desks', 'shelves', 'beer'],

  currentNoun: null,

  // hex colors from https://flatuicolors.com/palette/us
  colors: ['#55efc4', '#81ecec', '#74b9ff', '#a29bfe', '#00b894', '#00cec9', '#0984e3', '#6c5ce7', '#fab1a0', '#ff7675', '#fd79a8', '#fdcb6e', '#e17055', '#d63031', '#e84393'],

  currentColor: null,

  init: function() {
    this.currentNoun = this.nouns[0];
    this.currentColor = this.colors[0];
  }

};

var controller = {

  init: function() {
    view.init();
    model.init();
    this.createNoun();
  },

  // set initial noun to page
  createNoun: function() {
    view.nounSpan.appendChild(document.createTextNode(model.currentNoun));
  },

  randomize: function(x) {
    var y = Math.floor(Math.random() * Math.floor(x.length));
    return x[y];
  },

  // update noun span text and color
  changeNouns: function() {
    // get random noun
    var tryNoun = controller.randomize(model.nouns);
    while (tryNoun === model.currentNoun) {
      tryNoun = controller.randomize(model.nouns);
    }
    model.currentNoun = tryNoun;

    // get random color
    var tryColor = controller.randomize(model.colors);
    while (tryColor === model.currentColor) {
      tryColor = controller.randomize(model.colors);
    }
    model.currentColor = tryColor;

    // update DOM
    view.nounSpan.firstChild.nodeValue = model.currentNoun;
    view.nounSpan.style.color = model.currentColor;
  }

};

var view = {

  nounSpan: document.querySelector("#id_noun"),

  init: function() {
    this.render();
  },

  render: function() {
    window.setInterval(controller.changeNouns, 1750);
  }

};

controller.init();