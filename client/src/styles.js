// Styles for the main home page using Material-UI 
// Syntax for Material-UI 

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },

}));