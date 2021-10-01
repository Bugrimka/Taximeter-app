import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Authorization} from "./Parts/Autorization";
import {Content} from "./Parts/Content";
import {Layout} from "antd";
import {GoogleProvider} from "./common/GoogleProvider";
import {AuthProvider} from "./common/AuthProvider";

const {Header, Content: AntdContent, Footer} = Layout;

export default function App() {
    return (
        <Router>
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo">
                        <div><img src="/DimanBlizzy.gif" alt=""/></div>
                        <div>Taximeter Online</div>
                    </div>
                </Header>
                <AntdContent className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                    <div className="site-layout-background" style={{padding: 24}}>
                        <GoogleProvider>
                            {({provider, auth, db}) => (
                                <AuthProvider>
                                    <Switch>
                                        <Route path="/authorization">
                                            <Authorization provider={provider} auth={auth}/>
                                        </Route>
                                        <Route path="/">
                                            <Content db={db}/>
                                        </Route>
                                    </Switch>
                                </AuthProvider>
                            )}
                        </GoogleProvider>
                    </div>
                </AntdContent>
                <Footer style={{textAlign: 'center'}}>Diman Design ©2021 Created by Ant UED</Footer>
            </Layout>
        </Router>
    );
}