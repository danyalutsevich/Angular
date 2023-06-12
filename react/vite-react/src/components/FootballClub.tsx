import { Component } from 'react';

class ClubInfo extends Component {
    render() {
        const { name, city, founded, emblem } = this.props;
        return (
            <div>
                <h2>{name}</h2>
                <p>City: {city}</p>
                <p>Founded: {founded}</p>
                <img src={emblem} alt="Club emblem" width={150} />
            </div>
        );
    }
}

class Achievements extends Component {
    render() {
        const { medals, cups, goals } = this.props;
        return (
            <div>
                <h3>Achievements</h3>
                <p>Medals: {medals}</p>
                <p>Cups: {cups}</p>
                <p>Goals: {goals}</p>
            </div>
        );
    }
}

class Squad extends Component {
    render() {
        const { players } = this.props;
        return (
            <div>
                <h3>Squad</h3>
                <ul>
                    {players.map(player => (
                        <li key={player.id}>{player.name} - {player.position}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

class FootballClub extends Component {
    render() {
        const club = {
            name: 'Real Madrid',
            city: 'Madrid',
            founded: '6 March 1902',
            emblem: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png'
        };
        const achievements = {
            medals: 34,
            cups: 13,
            goals: 7100
        };
        const squad = [
            { id: 1, name: 'Thibaut Courtois', position: 'GK' },
            { id: 2, name: 'Dani Carvajal', position: 'RB' },
            { id: 3, name: 'Sergio Ramos', position: 'CB' },
            { id: 4, name: 'Raphael Varane', position: 'CB' },
            { id: 5, name: 'Ferland Mendy', position: 'LB' },
            { id: 6, name: 'Casemiro', position: 'CDM' },
            { id: 7, name: 'Luka Modric', position: 'CM' },
            { id: 8, name: 'Toni Kroos', position: 'CM' },
            { id: 9, name: 'Marco Asensio', position: 'RW' },
            { id: 10, name: 'Karim Benzema', position: 'CF' },
            { id: 11, name: 'Vinícius Júnior', position: 'LW' }
        ];
        return (
            <div>
                <ClubInfo name={club.name} city={club.city} founded={club.founded} emblem={club.emblem} />
                <Achievements medals={achievements.medals} cups={achievements.cups} goals={achievements.goals} />
                <Squad players={squad} />
            </div>
        );
    }
}

class FootballClubs extends Component {
    state = {
        clubs: [
            {
                name: 'Real Madrid',
                city: 'Madrid',
                date: '6 March 1902',
                emblem: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Real_Madrid_CF.svg'
            },
            {
                name: 'Barcelona',
                city: 'Barcelona',
                date: '29 November 1899',
                emblem: 'https://upload.wikimedia.org/wikipedia/ca/thumb/4/47/FC_Barcelona_2019.svg/1200px-FC_Barcelona_2019.svg.png'
            },
            {
                name: 'Manchester United',
                city: 'Manchester',
                date: '1878',
                emblem: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg'
            }
        ]
    };

    render() {
        const { clubs } = this.state;
        return (
            <div>
                <h1>Football Clubs</h1>
                {clubs.map((club, index) => (
                    <FootballClub key={index} club={club} />
                ))}
            </div>
        );
    }
}

export default FootballClubs;
``
