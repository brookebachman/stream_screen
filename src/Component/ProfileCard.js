import React from 'react'
import styled from 'styled-components';
import Jun from '../jun.jpg'; 


const Image = styled.div`
background-image: url(${Jun});
height: 100px;
width: 100px;
border-radius: 50%;
background-size: cover;
`;

const ProfileInfo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`;

const Name = styled.p`
color: white;
font-size: 30px;
font-family: 'Montserrat', sans-serif;

align-self: center;
`;

const Button = styled.button`

`;
//put i tag inside of the button

const ProfileCard = () => {
    return (
        <>
        <ProfileInfo>
            <Image></Image>
            <Name>Jun 🦊</Name>
        </ProfileInfo>
        </>
    )
  

}


export default ProfileCard