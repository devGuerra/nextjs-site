import Head from 'next/head'
import Link from 'next/link'

import api from '../services/api'
import css from "../styles/scss/main.scss"
import Header from '../Components/Header'
import Categories from '../Components/Categories'
import GroupCard from '../Components/GroupCard'
import { useEffect } from 'react'

export default function Home({ groups, categories }) {
  return (
    <>
      <Head>
        <title>Gerazap - links de grupo do whatsapp</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A melhor lista de links de grupos de WhatsApp que você já conheceu. É grátis, simples e fácil você encontrar e entrar em um grupo de WhatsApp. Apenas um clique!"></meta>
      </Head>
      <Header />
      <Categories categories={categories} />
      <main>
        <div className="container">
          <h1 className="title">Grupos do Whatsapp</h1>
          <div className="feed">
            {groups.map((group) => (
              <GroupCard key={group._id} data={group} />
            ))}
          </div>
        </div>
        <div class="seo-content">
          <div class="footer-text">
            <div class="cWrap px-1">
              <h2>O que é o gerazap</h2>
              <p>
                Nós somos o melhor site de
            <strong>Links de Grupos de WhatsApp</strong> na internet. Aqui você
            encontra os melhores grupos de whatsapp para participar. Além disso,
            você também pode cadastrar seu grupo do whatsapp enviando o link.
            Dessa forma, muitas pessoas encontrarão o seu grupo de whatsapp e
            você terá muitos novos participantes. Você pode participar de
            quantos grupos do whatsapp desejar, sem limites, e também pode
            enviar quantos grupos quiser.
          </p>
              <h2>Como criar um grupo de WhatsApp?</h2>
              <p>Criar um grupo de WhatsApp é muito fácil e rápido, veja só:</p>
              <ol>
                <li>
                  Abra seu WhatsApp e, na parte inferior, clique na aba
              <strong>Conversas</strong>.
            </li>
                <li>
                  Em seguida, no canto superior direito, logo abaixo do campo de
              pesquisa, clique em <strong>Novo grupo</strong>.
            </li>
                <li>
                  Na lista de amigos, selecione os participantes do grupo inicial e
              clique em <strong>Avançar</strong>.
            </li>
                <li>Digite o nome do grupo de whatsapp que será criado.</li>
                <li>Clique no ícone da câmera e adicione uma foto ao seu grupo.</li>
                <li>Por fim, clique no botão <strong>Criar</strong>.</li>
              </ol>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
              ></script>
              <ins
                class="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-2270636537108959"
                data-ad-slot="9252076129"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
              <p>
                Uma dica super importante para você ter sucesso com seu grupo do
                whatsapp: pense em um nome interessante para o seu grupo e escolha
                uma boa foto relacionada ao tema do grupo. Isso fará com que mais
                pessoas se interessem em participar do seu grupo de WhatsApp.
          </p>
              <h2>Como excluir um grupo de WhatsApp?</h2>
              <ol>
                <li>Abra o WhatsApp e clique no grupo que deseja excluir.</li>
                <li>
                  Com o grupo aberto, clique no nome do grupo na parte superior.
            </li>
                <li>
                  Role para baixo até a lista de participantes e remova todos os
                  participantes, um por um.
            </li>
                <li>
                  Role até a parte inferior da tela e clique em
              <strong>Sair do grupo</strong>.
            </li>
                <li>Por fim, clique em <strong>Excluir grupo</strong>.</li>
              </ol>
              <p>
                Dica: você deve primeiro remover todos os participantes do grupo
                antes de sair do grupo, pois, caso contrário, o grupo não será
                excluído e algum dos participantes se tornará o novo administrador
                do grupo.
          </p>
              <h2>Como encontrar um grupo de WhatsApp?</h2>
              <p>
                Para encontrar grupos do whatsapp, você deve ir ao nosso site
                (gruposwhats.app) e pesquisar entre as várias categorias de grupos
                que temos. No momento, você não pode procurar grupos de whatsapp no
                &#8203;&#8203;próprio aplicativo.
          </p>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
              ></script>
              <ins
                class="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-2270636537108959"
                data-ad-slot="9252076129"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
              <h2>Como entrar em um grupo de WhatsApp?</h2>
              <p>Para entrar em um grupo de WhatsApp, você deve:</p>
              <ol>
                <li>Primeiro visite nosso site.</li>
                <li>
                  Pesquise o grupo ao qual você deseja entrar nas várias categorias
                  do nosso site.
            </li>
                <li>Clique no grupo ao qual você deseja entrar.</li>
                <li>
                  Na página que será aberta, clique em
              <strong>Ingressar no grupo</strong>.
            </li>
              </ol>
              <h2>Como sair de um grupo de WhatsApp?</h2>
              <ol>
                <li>Abra o Whatsapp e clique no grupo que deseja sair.</li>
                <li>
                  Com o grupo aberto, clique no nome do grupo na parte superior.
            </li>
                <li>
                  Role até a parte inferior da tela e clique em
              <strong>Sair do grupo</strong>.
            </li>
              </ol>
              <h2>Como adicionar alguém a um grupo de WhatsApp?</h2>
              <p>
                Para adicionar alguém a um grupo de WhatsApp, siga as etapas abaixo:
          </p>
              <ol>
                <li>
                  Abra o Whatsapp e clique no grupo que você deseja adicionar
                  alguém.
            </li>
                <li>Clique no nome do grupo na parte superior.</li>
                <li>
                  Role para baixo até a lista de participantes e clique em
              <strong>Adicionar participantes</strong>.
            </li>
                <li>
                  Na lista que será aberta, selecione todas as pessoas que você
                  deseja adicionar ao grupo.
            </li>
                <li>
                  Finalmente, clique no botão <strong>Adicionar</strong> no canto
              superior direito.
            </li>
              </ol>
              <p>
                Atenção: para adicionar participantes ao grupo do whatsapp, você
                deve ser administrador do grupo.
          </p>
              <h2>Como fazer uma chamada em grupo de WhatsApp?</h2>
              <p>
                Você sabia que pode fazer uma ligação em grupo no whatsapp? Sim,
                você pode fazer ligações em grupo de até 4 pessoas por vez, sendo
                você e mais 3. As chamadas podem ser de vídeo ou áudio. Siga os
                passos abaixo:
          </p>
              <ol>
                <li>
                  Abra o Whatsapp e clique no grupo que você deseja fazer a chamada.
            </li>
                <li>
                  No canto superior direito do grupo, clique no ícone do telefone
                  com um sinal de mais.
            </li>
                <li>Na lista que foi aberta, selecione até 3 pessoas.</li>
                <li>
                  Por fim, clique no ícone da câmera de vídeo se desejar criar uma
                  chamada de vídeo ou clique no ícone do telefone para criar uma
                  chamada de áudio.
            </li>
              </ol>
              <h2>Quantas pessoas cabem em um grupo de WhatsApp?</h2>
              <p>
                Atualmente, um grupo de WhatsApp tem capacidade para até 256
                pessoas. Porém, inicialmente só eram permitidos 100 pessoas por
                grupo, mas com o passar do tempo e o crescimento exponencial do
                aplicativo, o WhatsApp decidiu no ano de 2016 aumentar a capacidade
                de 100 para 256.
          </p>
              <h2>Como criar uma página para o meu grupo de WhatsApp?</h2>
              <p>
                Criando uma página para o seu grupo de WhatsApp, você poderá dar
                mais informações aos integrantes do seu grupo. Através de uma página
                você pode cadastrar a descrição do grupo, regras que devem ser
                seguidas e até mesmo quais são os administradores do grupo.
          </p>
              <p>
                Dessa forma, você não precisará escrever uma descrição longa no seu
                grupo, basta compartilhar o link da página e pronto!
          </p>
              <p>
                Pronto, a página do seu grupo de WhatsApp será criada e você já
                poderá compartilhar com todos os integrantes do seu grupo.
          </p>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
              ></script>
              <ins
                class="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-2270636537108959"
                data-ad-slot="9252076129"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
            </div>
          </div>
        </div>
        {/* {GetParam('avatar') && (
          <div className="feedOne">
            <div className="group">
              <GroupByApp data={body} />
              {ads()}
            </div>
          </div>
        )} */}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const listCategories = await api.get('/category')
  const categories = await listCategories.data.CategoryList

  const listGroups = await api.get('/category/Figurinhas')
  const groups = await listGroups.data.GroupList

  return {
    props: {
      groups,
      categories
    },
  }
}