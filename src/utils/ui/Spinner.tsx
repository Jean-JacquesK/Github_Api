export const Spinner = () => {
  return (
    <div className='d-flex justify-content-center m-5'>
      <div role='status'>
        <div
          className='spinner-border'
          style={{ width: "3rem", height: "3rem" }}
          role='status'
        >
          <span className='visually-hidden'>Loading...</span>
        </div>
        <div
          className='spinner-grow'
          style={{ width: "3rem", height: "3rem" }}
          role='status'
        >
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    </div>
  );
};
