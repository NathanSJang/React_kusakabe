import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    height: '100vmin',
  },
  cardStyle: {
      base: {
        color: "#32325d",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
  },
  form: {
    width: '60%',
    alignSelf: 'center',
    borderRadius: '7px',
    padding: '40px',
    display: 'block',
  },

  cardElement: {
    borderRadius: '4px 4px 0 0',
    padding: '12px',
    border: '1px solid rgba(50, 50, 93, 0.1)',
    maxHeight: '44px',
    width: '100%',
    background: 'white',
    boxSizing: 'border-box'
  },

  btn: {
    background: '#5469d4',
    color: '#ffffff',
    borderRadius: '0 0 4px 4px',
    border: '10px',
    padding: '12px 16px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'block',
    transition: 'all 0.2s ease',
    boxSshadow: '0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)',
    width: '100%'
  }
}));