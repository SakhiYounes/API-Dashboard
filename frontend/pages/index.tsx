import { GetServerSideProps } from 'next';
import { virementData } from '../types';
import Dashboard from './dashboardPage';



export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
    },
  };
};

export default function Home({ virementData }: Props) {
  return <Dashboard virementData={virementData} />;
}
