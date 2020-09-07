import React from "react";
import "./App.css";

function ViewData() {
    let data = [
        {
            name: "John",
            age: 25,
            gender: "Male",
            profession: "Engineer",
            photo:
                "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745",
        },
        {
            name: "Sarah",
            age: 22,
            gender: "Female",
            profession: "Designer",
            photo:
                "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg",
        },
        {
            name: "David",
            age: 30,
            gender: "Male",
            profession: "Programmer",
            photo:
                "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756",
        },
        {
            name: "Kate",
            age: 27,
            gender: "Female",
            profession: "Model",
            photo:
                "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg",
        },
    ];
    return(
        <div style={{display:'flex',flexFlow:'wrap'}}>
            {data.map((el,k)=>(
                <div 
                    k={k} 
                    style={{
                        width:'40%',
                        margin:'5px',
                        border: '1px solid black',
                        borderRadius: '10px'}}>
                    <img src={el.photo} style={{width:'100%'}}/>
                    <div>
                    <p>{(el.gender=="Male"?"Mr. ":"Mrs.")+el.name}</p>
                    </div>
                        
                </div>
            ))}
        </div>
    );
}
function App() {
    return (
        <div style={{width: '50%'}}>
            <ViewData/>
        </div>
    );
}   

export default App;
