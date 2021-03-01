describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
    .then(function testVS($el) {
      expect($el).to.have.value(75);
    })
  });

  it('Volume changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number')
    .then(function testVV($el) {
      expect($el).to.have.value(33);
    })
  });

  it('Audio element volume changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound')
    .then(function testAV($el) {
      expect($el).to.have.prop('volume', .33);
    })
  });

  it('Image source changes', () => {
    cy.get('#radio-party-horn').trigger('change');
    cy.get('#sound-image')
    .then(function testSI($el) {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    })
  });

  it('Sound source changes', () => {
    cy.get('#radio-party-horn').trigger('change');
    cy.get('#horn-sound')
    .then(function testSS($el) {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    })
  });

  it('Volume Image source changes to HIGH', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-image')
    .then(function testVI3($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    })
  });

  it('Volume Image source changes to MED', () => {
    cy.get('#volume-number').clear().type('50');
    cy.get('#volume-image')
    .then(function testVI2($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    })
  });

  it('Volume Image source changes to LOW', () => {
    cy.get('#volume-number').clear().type('10');
    cy.get('#volume-image')
    .then(function testVI1($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    })
  });

  it('Volume Image source changes to MUTED', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image')
    .then(function testVI0($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    })
  });

  it('Honk Button disabled when muted', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#honk-btn')
    .then(function testHD($el) {
      expect($el).to.have.prop('disabled', true);
    })
  });

  it('Honk Button disabled when non-number input', () => {
    cy.get('#volume-number').clear().type('shoe');
    cy.get('#honk-btn')
    .then(function testHD2($el) {
      expect($el).to.have.prop('disabled', true);
    })
  });

  it('Error shown when input not in range', () => {
    cy.get('#volume-number').clear().type('101');
    expect(true).to.equal(false);
  });


});
