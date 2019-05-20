import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import ProjectPage from '../screens/ProjectPage';
import ContactPage from '../screens/ContactPage';
import PortfolioItemPage from '../screens/PortfolioItemPage';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer'
import NotFoundPage from '../screens/NotFoundPage';

const AppRouter = () => (
    <HashRouter>
        <div id="page">
            <div id="top"></div>
            <div id="left"></div>
            <div id="right"></div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={ProjectPage} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioItemPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </HashRouter>
)

export default AppRouter;
