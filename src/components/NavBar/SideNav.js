import React, { Component } from "react";
import SideNavHeader from "./SideNavHeader"
import NewItemButton from "./NewItemButton"
import ItemList from "./ItemList"
import "../../styles/SideNav.css"

const files = [
	{
		file_id: 1,
		file_name: "File 1",
		content: "Biodiesel portland art party, listicle waistcoat gochujang tattooed yr banjo mustache. Chia marfa asymmetrical slow-carb, brooklyn bespoke hella humblebrag fingerstache. Slow-carb unicorn neutra seitan post-ironic. Jean shorts farm-to-table mumblecore umami +1 kombucha man bun la croix squid 90's tumblr pinterest typewriter tilde. Bitters ramps truffaut, PBR&B hella ugh crucifix beard. +1 snackwave shoreditch freegan migas, heirloom iPhone sustainable yr typewriter raclette banjo. Listicle swag plaid tote bag four dollar toast messenger bag salvia slow-carb sriracha locavore neutra sustainable. Church-key microdosing skateboard, pok pok scenester yr brunch dreamcatcher flannel meh keffiyeh af polaroid. Literally scenester hell of pabst wolf cray stumptown meggings shaman irony. Try-hard banjo offal live-edge, VHS cronut before they sold out sriracha beard celiac adaptogen church-key. Thundercats williamsburg green juice small batch photo booth brooklyn, poke bushwick shabby chic biodiesel. Helvetica jean shorts occupy lyft flexitarian. Snackwave shaman literally, next level copper mug ramps lumbersexual gentrify cold-pressed chia succulents lomo four loko 8-bit."
	},
	{
		file_id: 2,
		file_name: "File 2",
		content:"Twee jean shorts narwhal enamel pin. Trust fund chambray seitan, quinoa listicle pok pok hoodie selvage retro distillery lomo +1 church-key poke. Intelligentsia XOXO chicharrones bespoke af enamel pin viral post-ironic selfies meggings thundercats you probably haven't heard of them. Chartreuse truffaut ethical fixie mustache, bitters enamel pin venmo celiac pok pok pabst kombucha asymmetrical. Food truck flexitarian la croix, health goth vape occupy art party dreamcatcher lyft paleo gluten-free jean shorts truffaut live-edge. Cred brunch etsy, taxidermy locavore literally vegan portland. Knausgaard taiyaki gluten-free wayfarers. La croix swag hashtag offal, microdosing seitan yr chia tumblr salvia letterpress selfies. Try-hard fanny pack VHS, health goth palo santo jianbing helvetica banh mi migas tote bag keytar forage vexillologist air plant tattooed. Twee mustache kombucha yuccie edison bulb mixtape everyday carry neutra authentic polaroid. Cray schlitz raw denim, put a bird on it bushwick mixtape hot chicken chillwave fingerstache austin pug chartreuse polaroid blue bottle hella."
	},
	{
		file_id: 3,
		file_name: "File 3",
		content: "Biodiesel portland art party, listicle waistcoat gochujang tattooed yr banjo mustache. Chia marfa asymmetrical slow-carb, brooklyn bespoke hella humblebrag fingerstache. Slow-carb unicorn neutra seitan post-ironic. Jean shorts farm-to-table mumblecore umami +1 kombucha man bun la croix squid 90's tumblr pinterest typewriter tilde. Bitters ramps truffaut, PBR&B hella ugh crucifix beard. +1 snackwave shoreditch freegan migas, heirloom iPhone sustainable yr typewriter raclette banjo. Listicle swag plaid tote bag four dollar toast messenger bag salvia slow-carb sriracha locavore neutra sustainable. Church-key microdosing skateboard, pok pok scenester yr brunch dreamcatcher flannel meh keffiyeh af polaroid. Literally scenester hell of pabst wolf cray stumptown meggings shaman irony. Try-hard banjo offal live-edge, VHS cronut before they sold out sriracha beard celiac adaptogen church-key. Thundercats williamsburg green juice small batch photo booth brooklyn, poke bushwick shabby chic biodiesel. Helvetica jean shorts occupy lyft flexitarian. Snackwave shaman literally, next level copper mug ramps lumbersexual gentrify cold-pressed chia succulents lomo four loko 8-bit."
	},
	{
		file_id: 4,
		file_name: "File 4",
		content:"Twee jean shorts narwhal enamel pin. Trust fund chambray seitan, quinoa listicle pok pok hoodie selvage retro distillery lomo +1 church-key poke. Intelligentsia XOXO chicharrones bespoke af enamel pin viral post-ironic selfies meggings thundercats you probably haven't heard of them. Chartreuse truffaut ethical fixie mustache, bitters enamel pin venmo celiac pok pok pabst kombucha asymmetrical. Food truck flexitarian la croix, health goth vape occupy art party dreamcatcher lyft paleo gluten-free jean shorts truffaut live-edge. Cred brunch etsy, taxidermy locavore literally vegan portland. Knausgaard taiyaki gluten-free wayfarers. La croix swag hashtag offal, microdosing seitan yr chia tumblr salvia letterpress selfies. Try-hard fanny pack VHS, health goth palo santo jianbing helvetica banh mi migas tote bag keytar forage vexillologist air plant tattooed. Twee mustache kombucha yuccie edison bulb mixtape everyday carry neutra authentic polaroid. Cray schlitz raw denim, put a bird on it bushwick mixtape hot chicken chillwave fingerstache austin pug chartreuse polaroid blue bottle hella."
	}
];

const tags = [
	{
		tag_id: 1,
		file_id: [1, 2],
		tag_name: "Tag 1"
	},
	{
		tag_id: 2,
		file_id: [3, 4],
		tag_name: "Tag 2"
	},
	{
		tag_id: 3,
		file_id: [1, 3],
		tag_name: "Tag 3"
	},
	{
		tag_id: 4,
		file_id: [1, 3],
		tag_name: "Tag 4"
	},
	{
		tag_id: 5,
		file_id: [ 2, 3],
		tag_name: "Tag 5"
	},
	{
		tag_id: 6,
		file_id: [3, 4],
		tag_name: "Tag 6"
	},
	{
		tag_id: 7,
		file_id: [2, 3],
		tag_name: "Tag 7"
	},
	{
		tag_id: 8,
		file_id: [2, 3],
		tag_name: "Tag 8"
	},
	{
		tag_id: 9,
		file_id: [1, 3],
		tag_name: "Tag 9"
	},
	{
		tag_id: 10,
		file_id: [3],
		tag_name: "Tag 10"
	},
	{
		tag_id: 11,
		file_id: [1],
		tag_name: "Tag 11"
	},
	{
		tag_id: 12,
		file_id: [3, 4],
		tag_name: "Tag 12"
	}
];

export default class SideNav extends Component {
    render() {
      return (
        <div className="sideNav">
			<SideNavHeader />
			<NewItemButton />
			<ItemList data={tags} />
        </div>
      );
    }
  }