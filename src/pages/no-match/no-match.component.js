import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setIsLoading} from '../../redux/globals/globals.actions';
import {withRouter} from 'react-router-dom';
import {getDataForURL, setDataForURL} from '../../redux/globals/globals.actions';
import {selectPageData} from '../../redux/globals/globals.selectors';
import loadable from '@loadable/component';
import useIsServer from '../../components/hooks/useIsServer.hook';

//Page templates
import NoPage from '../404/no-page.component';

const IndexPage = loadable(() => import(/* webpackPrefetch: true */ '../index/IndexPage'));
const DefaultPage = loadable(() => import(/* webpackPrefetch: true */ '../defaultPage/defaultPage.component'));
const LocationPage = loadable(() => import(/* webpackPrefetch: true */ '../locationPage/LocationPage'));
const B2BPage = loadable(() => import(/* webpackPrefetch: true */ '../b2bPage/b2bPage'));
const SpecialOffer = loadable(() => import(/* webpackPrefetch: true */ '../specialOffer/specialOffer.component'));
const LocationList = loadable(() => import(/* webpackPrefetch: true */ '../locationList/locationList.component'));

const NoMatch = props => {
    const components = {
        index: IndexPage,
        topics: DefaultPage,
        defaultLocation: LocationPage,
        defaultPage: DefaultPage,
        defaultPageData: B2BPage,
        defaultRecept: DefaultPage,
        specialOffers: SpecialOffer,
        listLocations: LocationList
    };

    const {history} = props;
    const data = useSelector(selectPageData);
    const dispatch = useDispatch();
    const template = data.response ? data.response.filename.split('#').pop() : null;

    const isServer = useIsServer();
    const ComponentToMount = components[template];

    const setIsIndex = url => {
        if (url === '/') {
            document.querySelector('body').classList.add('index');
        } else {
            document.querySelector('body').classList.remove('index');
        }
    };

    useEffect(() => {
        dispatch(setIsLoading(false));
    }, [dispatch]);

    useEffect(() => {
        let url = history.location.pathname; //.slice(-1) === "/" ? history.location.pathname.slice(0, -1) : history.location.pathname;

        dispatch(getDataForURL(url)).then(res => {
            //Restore scroll position

            if (!isServer) {
                setIsIndex(window.location.pathname);
                let hist = JSON.parse(sessionStorage.getItem('history')) || [];
                if (hist[hist.length - 1].pathname == window.location.pathname) window.scrollTo(0, hist[hist.length - 1].scrollY);
            }
        });
    }, [history.location.pathname]);

    const showComponent = !data.isError && ComponentToMount;
    return <main className="bottom-wrap">{showComponent ? <ComponentToMount key={data.key} {...data.response} /> : !data.isLoading ? <NoPage /> : <div></div>}</main>;
};

NoMatch.loadData = getDataForURL;
export default withRouter(NoMatch);
