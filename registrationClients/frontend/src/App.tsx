import { FiTrash } from 'react-icons/fi'; // Importa o ícone de lixeira da biblioteca de ícones React-icons
import { api } from './services/api'; // Importa a instância da API que foi criada para fazer requisições HTTP
import { useEffect, useState, useRef, FormEvent } from 'react'; // Importa hooks do React para manipulação de estado e efeitos

// Define a estrutura esperada para os dados de um cliente
interface CustomerProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  created_at: string;
}

// Componente principal do aplicativo
export default function App() {

  // Define o estado para armazenar os clientes
  const [customers, setCustomers] = useState<CustomerProps[]>([]);

  // Referências para os inputs de nome e email do formulário
  const nameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)

  // Efeito que carrega os clientes quando o componente é montado
  useEffect(() => {
    loadCustomers();
  }, [])

  // Função assíncrona para carregar os clientes da API
  async function loadCustomers() {
    const response = await api.get("/customers");
    setCustomers(response.data);
  }

  // Função assíncrona para lidar com o envio do formulário
  async function handleSumbit(event: FormEvent) {
    event.preventDefault();

    // Verifica se os campos de nome e email estão preenchidos
    if (!nameRef.current?.value || !emailRef.current?.value) return;

    // Envia uma requisição POST para criar um novo cliente
    const response = await api.post("/customer", {
      name: nameRef.current?.value,
      email: emailRef.current?.value
    })

    // Atualiza o estado dos clientes com o novo cliente criado
    setCustomers(allCustomers => [...allCustomers, response.data])

    // Limpa os campos de nome e email após o envio do formulário
    nameRef.current.value = ""
    emailRef.current.value = ""

  }

  // Função assíncrona para lidar com a exclusão de um cliente
  async function handleDelete(id: string) {
    try {
      // Envia uma requisição DELETE para remover um cliente
      await api.delete("/customer", {
        params: {
          id: id,
        }
      })

      // Filtra os clientes para remover o cliente excluído e atualiza o estado
      const allCustomers = customers.filter((customer) => customer.id !== id)
      setCustomers(allCustomers)

    } catch (err) {
      console.log(err)
    }
  }

  // Retorna o JSX do componente, incluindo o formulário e a listagem dos clientes
  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl " >
        <h1 className="text-4xl font-medium text-white">Clientes</h1>

        <form className="flex flex-col my-6" onSubmit={handleSumbit}>
          <label className="font-medium text-white">Nome:</label>
          <input
            type="text"
            placeholder="Digite o seu nome completo..."
            className="w-full mb-5 p-2 rounded"
            ref={nameRef}
          />

          <label className="font-medium text-white">Email:</label>
          <input
            type="email"
            placeholder="Digite o seu email..."
            className="w-full mb-5 p-2 rounded"
            ref={emailRef}
          />

          <input
            type="submit"
            value="Cadastrar"
            className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
          />
        </form>

        <section className="flex flex-col gap-4">
          {customers.map((customer) => (
            
            <article
              key={customer.id}
              className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200"
            >

              <p><span className="font-medium">Nome:</span> {customer.name}</p>
              <p><span className="font-medium">Email:</span> {customer.email}</p>
              <p><span className="font-medium">Status:</span> {customer.status ? "ATIVO" : "INATIVO"}</p>

              <button
                className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2"
                onClick={() => handleDelete(customer.id)}
              >

                <FiTrash size={18} color="#FFF" />

              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}