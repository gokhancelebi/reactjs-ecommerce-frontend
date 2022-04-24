import './index.scss';

const Form = (props) => {

  let classnames = "";

  if (props.className) {
    classnames += props.className;
  }

  return (
    <div className={classnames}>
      <form
          onSubmit={props.onSubmit}
          className='form-general flex flex-col items-center justify-center w-full p-5'
      >
        {props.children}
      </form>
    </div>
  )
}
export default Form