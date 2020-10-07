class Pet {
    constructor(image) {
        this.petName = null;
        this.image = loadImage(image);
        this.x = 175;
        this.y = 275;
        this.w = 300;
        this.h = 300;
    }

    updateName(name){
        this.petName = name;
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.w, this.h);
    }
}