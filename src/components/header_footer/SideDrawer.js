import React from 'react'
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from 'react-scroll'

const SideDrawer = (props) => {

  const scrollToElement = (el) => {
    scroller.scrollTo(el, {
      duraton: 1500,
      delay:100,
      smooth: true,
      offset: -50
    });
    props.onClose(false)
  }
  return <Drawer anchor="right" open={props.open} onClose={() => props.onClose(false)}>
      <List component="nav">
      <ListItem button onClick={() => scrollToElement('featured')}>
          Event starts in
        </ListItem>
      <ListItem button onClick={() => scrollToElement('venuenfo')}>
          Venue NFO
        </ListItem>
        <ListItem button onClick={() => scrollToElement('highlihts')}>
          Highlights
        </ListItem>
      <ListItem button onClick={() => scrollToElement('pricing')}>
          Pricing
        </ListItem>
      <ListItem button onClick={() => scrollToElement('location')}>
          Location
        </ListItem>
      </List>
    </Drawer>;
}

export default SideDrawer
