import React from 'react';
import { Container, Stack, Header, Content, Footer, Input, Button } from 'rsuite';
import '../Popup.css';
import owner from '../../../assets/img/owner..png';
import tyypr from '../../../assets/img/tyypr..png';
import tyypr1 from '../../../assets/img/tyypr.svg';

const TyyprPage = () => {
  return (
    <div className="App">
      <Container>
        <Header className="mt-6">
          <p className="text-[1.3rem] text-right mr-[3rem]">account</p>
        </Header>
        <Content className="mt-[2rem]">
          <div className="flex flex-row w-full justify-center items-center mb-3">
            <div className="w-[5.5rem]">
              <img src={tyypr} className={''} />
            </div>
            <div>
              <Input
                placeholder="your email"
                className="border-[#222222] bg-[#222222] w-[15rem] inputSetup"
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-center items-center mb-3">
            <div className="w-[5.5rem]">
              <p className='text-[0.95rem]'>name</p>
            </div>
            <div>
              <Input
                placeholder="your company name"
                className="border-[#222222] bg-[#222222] w-[15rem] inputSetup"
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-center items-center mb-3">
            <div className="w-[5.5rem]">
              <p className='text-[0.95rem]'>owner</p>
            </div>
            <div>
              <Input
                placeholder="owner's tyypr email"
                className="border-[#222222] bg-[#222222] w-[15rem] inputSetup"
              />
            </div>
          </div>
          <div>
            <div className='flex flex-row items-end justify-center'>
                <p className='text-[1.1rem] mr-4 ml-[4.5rem]'>work for more accounts?</p>
                <p className='text-[1.1rem] text-[#d8e91a86] cursor-pointer'>owner</p>
            </div>
          </div>

          <div className='flex flex-row justify-center mt-4'>
            <Button appearance="ghost" className='btnSetup ml-[14.5rem]'>sign up</Button>
          </div>
        </Content>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default TyyprPage;
