import { useRef } from "react";
import Matter from "matter-js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import goodnews from '../assets/goodnews.png'

const SmileyGame = () => {
    const sceneRef = useRef(null);
    const cursorRef = useRef(null);

    useGSAP(() => {
        const { Engine, Render, Runner, Bodies, Composite, Mouse, Events, Body } = Matter;

        const width = sceneRef.current.clientWidth;
        const height = sceneRef.current.clientHeight;

        const engine = Engine.create();
        const world = engine.world;

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: width,
                height: height,
                wireframes: false,
                background: "transparent", 
            },
        });

        Render.run(render);

        const runner = Runner.create();
        Runner.run(runner, engine);

        // 🧱 Walls
        const ground = Bodies.rectangle(width / 2, height + 5, width, 10, { isStatic: true });
        const groundL = Bodies.rectangle(0, height / 2, 1, height * 2, { isStatic: true });
        const groundR = Bodies.rectangle(width, height / 2, 1, height * 2, { isStatic: true });

        Composite.add(world, [ground, groundL, groundR]);

        // 🖱️ Mouse
        const mouse = Mouse.create(render.canvas);

        // 💥 Repulsion logic
        Events.on(engine, "beforeUpdate", () => {
            const mousePos = mouse.position;
            const bodies = Composite.allBodies(world);

            bodies.forEach((obj) => {
                if (obj.label !== "smiley") return;

                const dx = obj.position.x - mousePos.x;
                const dy = obj.position.y - mousePos.y;

                const distance = Math.sqrt(dx * dx + dy * dy);
                const radius = 120;

                if (distance < radius && distance > 0) {
                    Body.applyForce(obj, obj.position, {
                        x: dx * 0.0004,
                        y: dy * 0.0006,
                    });
                }
            });
        });

        // 🎯 Spawn balls
        let count = 0;
        const interval = setInterval(() => {
            if (count >= 35) {
                clearInterval(interval);
                const lid = Bodies.rectangle(0, 0, width+700, 1, { isStatic: true })
                Composite.add(world, lid)
                return;
            }

            const smiley = Bodies.circle(
                Math.random() * width,
                -Math.random() * 100,
                45,
                {
                    label: "smiley", // ✅ IMPORTANT
                    restitution: 0.4,
                    render: {
                        sprite: {
                            texture: '/src/assets/smile.png',
                            xScale: 0.2,
                            yScale: 0.2
                        }
                    }
                }
            );

            Composite.add(world, smiley); 
            count++;
        }, 90);

        return () => {
            clearInterval(interval); // ✅ cleanup
            Render.stop(render);
            Runner.stop(runner);
            Composite.clear(world);
            Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        };
    }, []);
    const handleEnter = (e) =>{
        const rect = sceneRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        gsap.to(cursorRef.current, {
            x:x,
            y:y,
            scale: 1,
            opacity: 1,
            duration: 0.3,
        })
    }

    const handleLeave = (e) =>{
        gsap.to(cursorRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
        })
    }

    return (
        <div className="relative md:h-[89.2vh] h-[90vw] lg:w-[45vw] w-[100vw] overflow-hidden cursor-pointer">
            <img src={goodnews} className="absolute inset-0 w-full h-full object-cover z-0" />
            <div ref={sceneRef} className="absolute inset-0 z-10" onMouseMove={handleEnter} onMouseLeave={handleLeave}/> //canvas
            {/* 🟡 Floating View Circle */}
            <div ref={cursorRef} className=' pointer-events-none absolute top-0 left-0 w-24 h-24 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-sm text-black'
                style={{ transform: "translate(-50%, -50%) scale(0)", opacity: 0,}}>View</div>
        </div>
    );
};

export default SmileyGame;