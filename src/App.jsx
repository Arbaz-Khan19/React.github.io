import React from 'react';
import './index.css';
import Sign from './Signup.jsx';
import Homepage from './Homepage';
import Account from './Account.jsx';


const App = () => {
    return(
        <>
        <div className="together">
<Sign />
<Account />
<Homepage />
</div>
</>
    );
}
export default App;
