import {
    Box,
    Card,
    CardBody,
    Grid,
    GridItem,
    StatGroup,
} from '@chakra-ui/react'
import { areaImprovment } from '../dataset/data';

export function ImprovementStatWidget() {

    const keys = Object.keys(areaImprovment);
    const data = areaImprovment;

    const renderList = () => {
        const listItems = [];
        for (let i = 0; i < keys.length; i += 2) {
            listItems.push(
                <StatGroup key={keys[i]}>
                    <div className="col-xl-5 col-md-6 mb-4">
                        <div className="card shadow h-100 py-2" style={{
                            background: data[keys[i]] < 0 ? 'linear-gradient(to right,  rgba(106,76,100,1) 0%, rgba(23,46,78,1) 100%)' : "linear-gradient(to right, rgba(36,82,90,1) 0%, rgba(10,35,69,1) 100%)",
                            borderColor: '#fff',
                            borderLeftWidth: '3px',
                            borderLeftColor: data[keys[i]] > 0 ? '#1cc88a' : '#e74a3b',
                        }}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="h5 font-weight-bold text-light text-uppercase mb-1">
                                            {keys[i]}</div>
                                        <div id="card-earning-monthly-1"
                                            className="text-xs mb-0 font-weight-bold text-light">{data[keys[i]]} hrs {data[keys[i]] > 0 ? "ahead" : "behind"} than expected</div>
                                    </div>
                                    <div className="col-auto">
                                        {data[keys[i]] > 0 ? <i className="fa fa-caret-up fa-2x" style={{
                                            color: '#1cc88a'
                                        }}></i> : <i className="fa fa-caret-down fa-2x" style={{
                                            color: '#e74a3b'
                                        }}></i>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {keys[i + 1] && <div className="col-xl-5 col-md-6 mb-4">
                        <div className="card shadow h-100 py-2" style={{
                            background: data[keys[i + 1]] < 0 ? 'linear-gradient(to right,  rgba(106,76,100,1) 0%, rgba(23,46,78,1) 100%)' : "linear-gradient(to right, rgba(36,82,90,1) 0%, rgba(10,35,69,1) 100%)",
                            borderColor: '#fff',
                            borderLeftWidth: '3px',
                            borderLeftColor: data[keys[i + 1]] > 0 ? '#1cc88a' : '#e74a3b',
                        }}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="h5 font-weight-bold text-light text-uppercase mb-1">
                                            {keys[i + 1]}</div>
                                        <div id="card-earning-monthly-1"
                                            className="text-xs  mb-0 font-weight-bold text-light">{data[keys[i + 1]]} hrs {data[keys[i + 1]] > 0 ? "ahead" : "behind"} than expected</div>
                                    </div>
                                    <div className="col-auto">
                                        {data[keys[i + 1]] > 0 ? <i className="fa fa-caret-up fa-2x" style={{
                                            color: '#1cc88a'
                                        }}></i> : <i className="fa fa-caret-down fa-2x" style={{
                                            color: '#e74a3b'
                                        }}></i>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </StatGroup>
            );
        }
        return listItems;
    };

    return (
        <Box mb="8" w="full">
            <Grid
                templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
                gap="4"
                width="full"
            >
                <GridItem as={Card}>
                    <CardBody>
                        {
                            renderList()
                        }
                    </CardBody>
                </GridItem>
            </Grid>
        </Box>
    )
}