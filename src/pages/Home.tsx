import CreatorInfo from '../components/Creator';

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-red-700 text-3xl text-center">
        Welcome to React Quick Starter
      </h1>
      <CreatorInfo />
    </div>
  );
};

export default Home;
