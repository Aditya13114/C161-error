AFRAME.registerComponent("bullets",{
    init:function(){
        this.shootBullet();
    },
    shootBullet:function(){
        window.addEventListener("keyDown", (e)=>{
            if(e.key === "l"){
                var bullet = document.createElement("a-entity")
                bullet.setAttribute("geometry", {
                    primitive:"sphere",
                    radius: "0.1"
                })
                bullet.setAttribute("material", "color", "black")
                var cam = document.querySelector("#camera")
                pos = cam.getAttribute("position")
                bullet.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
                bullet.setAttribute("velocity", {x:0, y:0, z:-1})
            }
            cam.appendChild("bullet")
        })
    }
})