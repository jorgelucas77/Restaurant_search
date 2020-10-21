import React, { useState } from 'react';
import Slider from "react-slick";

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal } from '../../components';

import  { Container, Search, Logo, Wrapper, Map, Carousel,  CarouselTitle } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
            dots: false,
            infinite: true,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 4,
            adaptiveHeight: true,
    };

   return (
       <Wrapper>
        <Container>
                <Search>
                    <Logo src={logo} alt="logotipo do restaurante" />
                    
                    <TextField
                        label="Pesquisar"
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />} 
                        >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} 
                        />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante}  title="sei la"/>
                        <Card photo={restaurante} title="sei la"/>
                        <Card photo={restaurante} title="sei la"/>
                        <Card photo={restaurante} title="sei la"/>
                        <Card photo={restaurante} title="sei la"/>
                        <Card photo={restaurante} title="sei la"/>
                        <Card photo={restaurante} title="sei la"/>
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
         </Wrapper>
   );
};

export default Home;