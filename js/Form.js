class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","Enter Your Name")
    this.playButton=createButton("Play")
    this.titleImage=createImg("assets/title.png","Game Title")
    this.greeting=createElement("h2")
  }
  hide(){
    this.greeting.hide()
    this.playButton.hide()
    this.input.hide()
  }

  handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      var message = `
      HELLO ${this.input.value()}
      </br> Wait For Another Player To Join.....`;
      this.greeting.html(message)
    })
  }

setElementPosition(){
this.titleImage.position(120,50)
this.input.position(width/2 -110,height/2 -80)
this.playButton.position(width/2 -90, height/2 - 20)
this.greeting.position(width/2 -300, height/2 -100)
}
display(){
  this.setElementPosition()
  this.handleMousePressed()
}
}
