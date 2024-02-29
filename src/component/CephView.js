import React, {useRef, useState, useEffect} from "react";
//import {Ceph} from './assert/lat_film.jpg'
import {Link} from "react-router-dom";

export default function CephView() {
    const canvasRef = useRef(null)
    const contextRef =useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const [ratio, setRatio] = useState(1);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = "${window.innerWidth}px";
        canvas.style.height = "${window.innerHeight}px";

        const updateCanvasSize = () => {
            const { width, height } = canvas.getBoundingClientRect();
        };

        const context = canvas.getContext("2d")
        context.scale(ratio, ratio);
        context.lineCap ="round"
        context.strokeStyle="blue"
        context.lineWidth=1
        contextRef.current = context;

        const marin = 20;
        const img = new Image();
        img.onload = () => {
            context.fillstyle = "green"
            context.fillRect(0, 0, img.width + marin*2, img.height+ marin*2)

            context.drawImage(img, marin*2, marin*2, img.width, img.height);

        };
        img.src = "image/lat_film.jpg"
    }, []);

    const  loadCanvas = () => {
        // to do....
    }

    const  startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;

        // 점 찍기
        contextRef.current.beginPath()
        contextRef.current.strokeStyle="red"
        contextRef.current.arc(offsetX, offsetY, 3, 0, 2*Math.PI);
        contextRef.current.stroke()

        contextRef.current.fillStyle="red"
        contextRef.current.fill()

        setIsDrawing(true)
    }

    const  finishDrawing = () => {
        setIsDrawing(false)
    }

    return (
        <div className="App">
            <canvas
                onLoad={loadCanvas}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                ref={canvasRef}
            />
        </div>
    );
}
