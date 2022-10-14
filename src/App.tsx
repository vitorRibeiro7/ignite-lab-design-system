import './styles/global.css'
import { Logo } from './Logo'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col'>
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size='lg' className='text-gray-400 mt-[2px]'>
          Faça seu login na plataforma.
        </Text>
      </header>
      <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
        <label htmlFor='email' className='flex flex-col gap-1'>

          <Text className='font-semibold '>Endereço de e-mail</Text>

          <TextInput.Root>

            <TextInput.Icon>
              <Envelope></Envelope>
            </TextInput.Icon>

            <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' />

          </TextInput.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-3'>

          <Text className='font-semibold '>Sua senha</Text>

          <TextInput.Root>

            <TextInput.Icon>
              <Lock></Lock>
            </TextInput.Icon>

            <TextInput.Input type='password' id='password' placeholder='**********' />

          </TextInput.Root>
        </label>
        <label htmlFor='remember' className='flex justify-start items-center gap-2'>

          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>
            Lembrar de mim por 30 dias
          </Text>
        </label>
        <Button type='submit' className='mt-34'>
          Entrar na plataforma
        </Button>
      </form>
      <footer className='flex flex-col gap-4 items-center mt-8'>
        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div >
  )
}