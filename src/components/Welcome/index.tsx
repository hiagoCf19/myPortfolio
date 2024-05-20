// import TypingEffect from "../EfeitoDigitação";

import ReactTypingEffect from 'react-typing-effect'
import MouseIcon from '../scroll';


const Welcome = () => {
  return (
    <section>
      <div className='flex flex-col items-center gap-4 mt-20'>
        <img src='./publicimgs/eu2.jpeg' className='rounded-full size-40 border-2 border-primary' />
        <h1 className='font-medium text-2xl'>
          Olá, me chamo Hiago Ferreira. Sou Desenvolvedor {""}
          <ReactTypingEffect
            text={["Front-end", "Back-end", "Full-stack"]}
            speed={100}
            eraseDelay={1000}
            className=' font-medium text-primary'
          />
        </h1>
        <p className='text-muted-foreground text-sm text-justify'>
          Seja bem-vindo ao meu portfólio! Aqui você encontrará uma coleção dos meus trabalhos, projetos e contribuições no mundo do desenvolvimento web.
        </p>

      </div>

      <div className='py-12'>
        <MouseIcon />
      </div>


    </section>
  );
};
export default Welcome;
