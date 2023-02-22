interface IPageProps {
  children: JSX.Element;
}

function Page({children}: IPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      {children}
    </div>
  );
}

export default Page;
