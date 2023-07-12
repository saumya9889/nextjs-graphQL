import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import client from '@/apollo-client';
// import {client} from "@apollo-client";


export default function Home({countries}:any) {
  console.log(countries,"countries+++")
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    demo
    </main>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
 };
}