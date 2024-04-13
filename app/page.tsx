import Course from './Components/Course';
import Modal from './Components/Modal';

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};
const HomePage = ({ searchParams }: SearchParamProps) => {
  const show = searchParams?.modal;
  return (
    <div className="grid grid-cols-1 container p-5 mx-auto">
      <Course />
      {
          show && <Modal/>
        }
    </div>
  );
};

export default HomePage;
