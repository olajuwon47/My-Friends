import React from 'react';
import Tab from '../components/Tab.js';
function Tablist ({ robots }) {
   const TablistComponent = robots.map((_users, i)=>{
    return <Tab
     key={i}
      id={robots[i].id}
       name={robots[i].name}
        email={robots[i].email}
        />
   });
    return(
 <header>
{TablistComponent}
</header>
);      
}
export default Tablist;