import React from 'react'
import img4 from '../Assets/4.jpg'
import AboutStyle from '../Components/Layout/AboutStyle.module.css'

function About() {
  return (
    <div>
      <img src= {img4} alt="About" />
      <h1>Qui sommes-nous ?</h1>
      <p>C’est donc en 2022 que AriihDev, désireux de créer une société où le luxe et l’adrénaline seraient au centre de l’activité. C’est en réalité une évidence : créer une entreprise dont l’ADN serait à l’image de la passion qui l'anime.
AriihDev, passionné par les voitures de luxe, apporte sa connaissance du secteur de l’automobile de prestige. Offrir la meilleure prestation de service possible sur terre.</p>

<br />

<p>LUXURY CARS a à cœur d’apporter à sa clientèle une solution sur mesure, personnalisée à souhait. Il s’agit de répondre à une gamme étendue de problématiques, avec réactivité et imagination, tout en plaçant l’univers du luxe comme une solution évidente. Il faut dire que le fondateur de la marque sont eux-mêmes sensibilisés aux transports de prestige qu’ils affectionnent particulièrement.

Il mise sur ce qui se fait de mieux en la matière pour répondre aux exigences les plus aigües de leur clientèle. Leur connaissance du secteur les rend particulièrement attentifs aux évolutions des gammes, ce qui leur permet de disposer d’un parc locatif à la pointe de l’innovation.</p>

<br />
<br />
<br />
<br />
<p className='horaire'>Nous vous recevons principalement sur rendez-vous.

Lundi : 9h – 12h / 14h – 19h
Mardi : 9h – 12h / 14h – 19h
Mercredi : 9h – 12h / 14h – 19h
Jeudi : 9h – 12h / 14h – 19h
Vendredi : 9h – 12h / 14h – 19h
Samedi : 9h – 12h
Contactez-nous pour planifier un rendez-vous en dehors de nos horaires.</p>
    </div>
    
    
  )
}

export default About