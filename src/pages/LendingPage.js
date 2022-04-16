import LendingListForm from "../components/lending/LendingListForm";
import LendingSearchBox from "../components/lending/LendingSearchBox";

const LendingPage = () => {
  return (
    <div>
      <LendingSearchBox />
      <LendingListForm />
    </div>
  );
};

export default LendingPage;
