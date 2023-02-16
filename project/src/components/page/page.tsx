type PageProps = {
  children: JSX.Element;
}

function Page({children}: PageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      {children}
    </div>
  );
}

export default Page;
