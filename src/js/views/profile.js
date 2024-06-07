import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/profile.css";

const Profile = (props) => {
    const{store, actions}=useContext(Context);
    let params = useParams();
    console.log(params);
    let field 
    let item = store[`${params.type}`][`${params.index}`]

    // need help displaying profiles correctly 

    params.type === "people" ? (
        field = (
            <div className="wrapper">
                <div className="profile-top">
                    <img 
                    className="profile-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${parseInt(params.index) + 1}.jpg`}
                    onError={(e) => {
                        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                    }} 
                    />
                    <h1 className="profile-name">{item.name}</h1>
                    <p className="bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt ut sapien a pulvinar. 
                    Cras suscipit leo eget mi dignissim, in faucibus eros efficitur. Curabitur mollis iaculis euismod. 
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Proin metus mi, viverra nec ultrices sed, porttitor et nisl. Praesent consectetur maximus felis, 
                    vel scelerisque dolor blandit a. Sed nec nisl non diam iaculis tincidunt id semper nibh.Quisque sed 
                    mauris non dolor tempus condimentum ac vel sem. Vestibulum turpis augue, ornare et ipsum eget, congue 
                    gravida nunc. Ut efficitur pharetra mi et consequat. Vivamus at ex vel diam feugiat tempor non et dolor.
                    Aliquam vestibulum varius ultricies.Donec ullamcorper ut ante vel tempor. Aliquam vitae blandit dolor. 
                    Maecenas nec rhoncus dui.Etiam lobortis lorem pellentesque magna pulvinar, sit amet eleifend purus congue. 
                    Donec congue gravida elementum. Donec ac ligula quam. Donec bibendum odio pretium, tempor nunc vel, consectetur turpis.
                    Quisque aliquet felis ut maximus fermentum. Pellentesque eget gravida nunc. Nam et libero velit. Sed eget ligula ultricies, 
                    tincidunt nunc nec, pharetra est. Vestibulum maximus purus sit amet accumsan pulvinar. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Etiam ornare nunc non lacinia interdum. Sed elit ipsum, tristique at leo ultricies, 
                    interdum convallis justo. orbi fermentum orci odio, et aliquet libero tempus quis. Aliquam erat volutpat.
                    </p>
                </div>
                <div className="row stats">
                    <div className="col-3">
                        <h6>Birth Year</h6>
                        <div className="profile-data">{item.birth_year}</div>
                    </div>
                    <div className="col-3">
                        <h6>Gender</h6>
                        <div className="profile-data">{item.gender}</div>
                    </div>
                    <div className="col-3">
                        <h6>Height (cm)</h6>
                        <div className="profile-data">{item.height}</div>
                    </div>
                    <div className="col-3">
                        <h6>Mass (kg)</h6>
                        <div className="profile-data">{item.mass}</div>
                    </div>
                </div>
            </div>
        )
    ) : null
    params.type === "planets" ? (
        field = (
            <div>
                <div className="profile-top">
                    <img 
                    className="profile-image"
                    src={`https://starwars-visualguide.com/assets/img/planets/${parseInt(params.index) + 1}.jpg`}
                    onError={(e) => {
                        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                    }} 
                    />
                    <h1 className="profile-name">{item.name}</h1>
                    <p className="bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt ut sapien a pulvinar. 
                    Cras suscipit leo eget mi dignissim, in faucibus eros efficitur. Curabitur mollis iaculis euismod. 
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Proin metus mi, viverra nec ultrices sed, porttitor et nisl. Praesent consectetur maximus felis, 
                    vel scelerisque dolor blandit a. Sed nec nisl non diam iaculis tincidunt id semper nibh.Quisque sed 
                    mauris non dolor tempus condimentum ac vel sem. Vestibulum turpis augue, ornare et ipsum eget, congue 
                    gravida nunc. Ut efficitur pharetra mi et consequat. Vivamus at ex vel diam feugiat tempor non et dolor.
                    Aliquam vestibulum varius ultricies.Donec ullamcorper ut ante vel tempor. Aliquam vitae blandit dolor. 
                    Maecenas nec rhoncus dui.Etiam lobortis lorem pellentesque magna pulvinar, sit amet eleifend purus congue. 
                    Donec congue gravida elementum. Donec ac ligula quam. Donec bibendum odio pretium, tempor nunc vel, consectetur turpis.
                    Quisque aliquet felis ut maximus fermentum. Pellentesque eget gravida nunc. Nam et libero velit. Sed eget ligula ultricies, 
                    tincidunt nunc nec, pharetra est. Vestibulum maximus purus sit amet accumsan pulvinar. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Etiam ornare nunc non lacinia interdum. Sed elit ipsum, tristique at leo ultricies, 
                    interdum convallis justo. orbi fermentum orci odio, et aliquet libero tempus quis. Aliquam erat volutpat.
                    </p>
                </div>
                <div className="row stats">
                    <div className="col-3">
                        <h6>Climate</h6>
                        <div className="profile-data">{item.climate}</div>
                    </div>
                    <div className="col-3">
                        <h6>Terrain</h6>
                        <div className="profile-data">{item.terrain}</div>
                    </div>
                    <div className="col-3">
                        <h6>Population</h6>
                        <div className="profile-data">{item.population}</div>
                    </div>
                    <div className="col-3">
                        <h6>Rotation Period</h6>
                        <div className="profile-data">{item.rotation_period}</div>
                    </div>
                </div>
            </div>
        )
    ) : null
    params.type === "vehicles" ? (
        field = (
            <div>
            <div className="profile-top">
                <img 
                className="profile-image"
                src={`https://starwars-visualguide.com/assets/img/vehicles/${parseInt(params.index) + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }} 
                />
                <h1 className="profile-name">{item.name}</h1>
                <p className="bio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt ut sapien a pulvinar. 
                    Cras suscipit leo eget mi dignissim, in faucibus eros efficitur. Curabitur mollis iaculis euismod. 
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Proin metus mi, viverra nec ultrices sed, porttitor et nisl. Praesent consectetur maximus felis, 
                    vel scelerisque dolor blandit a. Sed nec nisl non diam iaculis tincidunt id semper nibh.Quisque sed 
                    mauris non dolor tempus condimentum ac vel sem. Vestibulum turpis augue, ornare et ipsum eget, congue 
                    gravida nunc. Ut efficitur pharetra mi et consequat. Vivamus at ex vel diam feugiat tempor non et dolor.
                    Aliquam vestibulum varius ultricies.Donec ullamcorper ut ante vel tempor. Aliquam vitae blandit dolor. 
                    Maecenas nec rhoncus dui.Etiam lobortis lorem pellentesque magna pulvinar, sit amet eleifend purus congue. 
                    Donec congue gravida elementum. Donec ac ligula quam. Donec bibendum odio pretium, tempor nunc vel, consectetur turpis.
                    Quisque aliquet felis ut maximus fermentum. Pellentesque eget gravida nunc. Nam et libero velit. Sed eget ligula ultricies, 
                    tincidunt nunc nec, pharetra est. Vestibulum maximus purus sit amet accumsan pulvinar. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Etiam ornare nunc non lacinia interdum. Sed elit ipsum, tristique at leo ultricies, 
                    interdum convallis justo. orbi fermentum orci odio, et aliquet libero tempus quis. Aliquam erat volutpat.
                </p>
            </div>
            <div className="row stats">
                    <div className="col-3">
                        <h6>Model</h6>
                        <div className="profile-data">{item.model}</div>
                    </div>
                    <div className="col-3">
                        <h6>Class</h6>
                        <div className="profile-data">{item.vehicle_class}</div>
                    </div>
                    <div className="col-3">
                        <h6>Manufacturer Corporation</h6>
                        <div className="profile-data">{item.manufacturer}</div>
                    </div>
                    <div className="col-3">
                        <h6>Passengers</h6>
                        <div className="profile-data">{item.passengers}</div>
                    </div>
                </div>
        </div>
        )
    ) : null

    return (
        <div>
            {field}
        </div>
    );
};

export default Profile;