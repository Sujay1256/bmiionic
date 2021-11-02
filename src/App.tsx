import React, { useState } from "react";
import { IonButton, IonIcon, IonContent, IonInput, IonToolbar, IonTitle, IonLabel, IonItem, IonApp } from '@ionic/react';

function App() {

    const [num, setnum] = useState<string>();
    const [weight, setweight] = useState<string>();
    const [bmi, setbmi] = useState<number>();

    function Reset() {
        setweight("");
        setnum("");
        setbmi(NaN);
    }
    function BmiCalc() {
        const height = parseInt(num);
        const bmiformula = (parseInt(weight) / (height * height));
        setbmi(bmiformula);
    }
    return (
        <div>
            <IonApp>
                <IonToolbar >
                    <IonTitle>BMI Calculator</IonTitle>
                </IonToolbar>
                <IonItem>
                    <IonLabel position="floating">Enter Your Weight (in kgs) :</IonLabel>
                    <IonInput type="number" onIonChange={(event) => {
                        setweight(event.detail.value)
                    }} value={weight} ></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Enter your Height (in meters) :</IonLabel>
                    <IonInput type="number" onIonChange={(event) => {
                        setnum(event.detail.value)
                    }} value={num}>  </IonInput>
                </IonItem>
                <br/>
                <IonButton onClick={BmiCalc}>Calculate BMI</IonButton>
                <IonButton onClick={Reset}>Reset</IonButton>
                <IonItem lines="none">{bmi}</IonItem>
            </IonApp>
            
        </div >
    );
}

export default App;
