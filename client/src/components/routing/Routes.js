import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import Dashboard from '../dashbord/Dashbord';
import Login from '../auth/Login';
import ProfileDash from '../Profile/ProfileDash';
import SettingsProfile from '../settings/SettingsProfile';
import Test from '../dashbord/Test';
import CreatePassword from '../auth/CreatePassword';
import ChoixJugeForm from '../dashbord/AddForm/ChoixJugeForm';
import ProfileJuge from '../dashbord/AddForm/ProfileJuge';
import MedaitionDetails from '../dashbord/MediationDetails';
const Routes = (props) => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/resetpassword/:id' component={CreatePassword} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/profile' component={ProfileDash} />
        <PrivateRoute exact path='/settings' component={SettingsProfile} />
        <PrivateRoute exact path='/test' component={Test} />
        <PrivateRoute exact path='/choixjuge' component={ChoixJugeForm} />
        <PrivateRoute exact path='/jugeprofile' component={ProfileJuge} />
        <PrivateRoute
          exact
          path='/mediationdetails/:id'
          component={MedaitionDetails}
        />
      </Switch>
    </section>
  );
};

export default Routes;
