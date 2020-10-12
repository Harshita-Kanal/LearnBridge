// import React from "react";
// import {
//   Container,
//   Divider,
//   Dropdown,
//   Grid,
//   Header,
//   Image,
//   List,
//   Menu,
//   Segment
// } from "semantic-ui-react";
// import { Link, withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import { logout } from "../store/actions/auth";

// class CustomLayout extends React.Component {
//   render() {
//     const { authenticated } = this.props;
//     return (
//       <div>
//         <Menu fixed="top" inverted>
//           <Container>
//             <Link to="/">
//               <Menu.Item header>Home</Menu.Item>
//             </Link>
//             {authenticated ? (
//               <Menu.Item header onClick={() => this.props.logout()}>
//                 Logout
//               </Menu.Item>
//             ) : (
//               <React.Fragment>
//                 <Link to="/login">
//                   <Menu.Item header>Login</Menu.Item>
//                 </Link>
//                 <Link to="/signup">
//                   <Menu.Item header>Signup</Menu.Item>
//                 </Link>
//               </React.Fragment>
//             )}
//           </Container>
//         </Menu>

//         {this.props.children}

//         <Segment
//           inverted
//           vertical
//           style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
//         >
//           <Container textAlign="center">
//             <Grid divided inverted stackable>
//               <Grid.Column width={3}>
//                 <Header inverted as="h4" content="Group 1" />
//                 <List link inverted>
//                   <List.Item as="a">Link One</List.Item>
//                   <List.Item as="a">Link Two</List.Item>
//                   <List.Item as="a">Link Three</List.Item>
//                   <List.Item as="a">Link Four</List.Item>
//                 </List>
//               </Grid.Column>
//               <Grid.Column width={3}>
//                 <Header inverted as="h4" content="Group 2" />
//                 <List link inverted>
//                   <List.Item as="a">Link One</List.Item>
//                   <List.Item as="a">Link Two</List.Item>
//                   <List.Item as="a">Link Three</List.Item>
//                   <List.Item as="a">Link Four</List.Item>
//                 </List>
//               </Grid.Column>
//               <Grid.Column width={3}>
//                 <Header inverted as="h4" content="Group 3" />
//                 <List link inverted>
//                   <List.Item as="a">Link One</List.Item>
//                   <List.Item as="a">Link Two</List.Item>
//                   <List.Item as="a">Link Three</List.Item>
//                   <List.Item as="a">Link Four</List.Item>
//                 </List>
//               </Grid.Column>
//               <Grid.Column width={7}>
//                 <Header inverted as="h4" content="Footer Header" />
//                 <p>
//                   Extra space for a call to action inside the footer that could
//                   help re-engage users.
//                 </p>
//               </Grid.Column>
//             </Grid>

//             <Divider inverted section />
//             <Image centered size="mini" src="/logo.png" />
//             <List horizontal inverted divided link size="small">
//               <List.Item as="a" href="#">
//                 Site Map
//               </List.Item>
//               <List.Item as="a" href="#">
//                 Contact Us
//               </List.Item>
//               <List.Item as="a" href="#">
//                 Terms and Conditions
//               </List.Item>
//               <List.Item as="a" href="#">
//                 Privacy Policy
//               </List.Item>
//             </List>
//           </Container>
//         </Segment>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     authenticated: state.auth.token !== null
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     logout: () => dispatch(logout())
//   };
// };

// export default withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(CustomLayout)
// );

import React from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            {this.props.isAuthenticated == true ? (
              <Menu.Item key="2">
                <Button type="text" onClick={this.props.logout}>
                  Logout
                </Button>
              </Menu.Item>
            ) : (
              <Menu.Item
                key="2"
                onClick={() => {
                  console.log("It works");
                }}
              >
                <a href="/login">
                  <Button type="link">Login</Button>
                </a>
              </Menu.Item>
            )}

            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/profiles/${this.props.userId}`}>Profile</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomLayout)
);
