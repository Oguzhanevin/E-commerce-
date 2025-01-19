import React from 'react';
import Header from '../layout/Header';
import TeamHeaderComponents from '../components/teamPageComponents/TeamHeaderComponents';
import TeamPageHero from '../components/teamPageComponents/TeamPageHero';
import MeetOutTeamList from '../components/teamPageComponents/MeetOutTeamList';
import Footer from '../components/generalComponents/Footer';
import FreeTrial from '../components/generalComponents/FreeTrial';

function Team() {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Team Header Section */}
      <TeamHeaderComponents />

      {/* Hero Section */}
      <TeamPageHero />

      {/* Meet Our Team Section */}
      <MeetOutTeamList />

      {/* Free Trial Section */}
      <FreeTrial />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Team;
