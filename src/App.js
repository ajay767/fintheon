import Container from './components/container';
import Header from './components/Header';
import Footer from './components/Footer';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import bg from './assets/map.jpeg';

const useStyle = makeStyles({
  root: {
    color: '#fff',
  },
  flex: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  icons: {
    color: '#7f7f7f',
    margin: '0 4px 0 0',
  },
  content: {
    color: '#7f7f7f',
  },
});
function App() {
  const style = useStyle();
  return (
    <>
      <Header />
      <div className="landing"></div>
      <Container
        style={{
          transform: 'translateY(-100px)',
        }}
        bg={bg}
        blockStyle={{ marginTop: '30px' }}
      >
        <div className="tile-btn">
          <Typography variant="h5" className={style.root}>
            Tata Motors pvt ltd
          </Typography>
        </div>
        <Typography variant="subtitle1" className={style.content}>
          <span className={style.flex}>
            <LocationOnIcon fontSize="small" className={style.icons} />
            Ground Floor tawi Chauk, near Tutu,sec-28, Chandigarh 171002
          </span>
        </Typography>
        <Typography variant="subtitle1" className={style.content}>
          <span className={style.flex}>
            <MailOutlineIcon fontSize="small" className={style.icons} />
            <span style={{ textDecoration: 'underline', marginRight: '5px' }}>
              tatamotorchd@gmail.com
            </span>
            |
            <PhoneIcon fontSize="small" className={style.icons} /> +91
            7878855747, +91 9875886945
          </span>
        </Typography>
        <Typography variant="subtitle1" className={style.content}>
          <span className={style.flex}>Pan number : 85K99BH</span>
        </Typography>
      </Container>

      <Container
        title="Bank Details"
        icon={true}
        style={{
          transform: 'translateY(-100px)',
        }}
      >
        <Grid container className={style.flex}>
          <Grid item xs={6} lg={2}>
            <Typography variant="subtitle1">Accont Number</Typography>
          </Grid>
          <Grid item xs={6} lg={10}>
            <Typography variant="subtitle2" className={style.content}>
              : 10230062781253
            </Typography>
          </Grid>

          <Grid item xs={6} lg={2}>
            <Typography variant="subtitle1">Bank Name</Typography>
          </Grid>
          <Grid item xs={6} lg={10}>
            <Typography variant="subtitle2" className={style.content}>
              : State Bank of India (SBI)
            </Typography>
          </Grid>

          <Grid item xs={6} lg={2}>
            <Typography variant="subtitle1">IFSC Code</Typography>
          </Grid>
          <Grid item xs={6} lg={10}>
            <Typography variant="subtitle2" className={style.content}>
              : SBI789548
            </Typography>
          </Grid>

          <Grid item xs={6} lg={2}>
            <Typography variant="subtitle1">Bank Address</Typography>
          </Grid>
          <Grid item xs={6} lg={10}>
            <Typography variant="subtitle2" className={style.content}>
              : Quite office 17,sec-40 chandigarh
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default App;
