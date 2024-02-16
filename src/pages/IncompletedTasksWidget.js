import {
    Box,
    Card,
    CardBody,
    Grid,
    GridItem,
    StatGroup,
} from '@chakra-ui/react'
import { incompleteTasks } from '../dataset/data'

export function IncompletedTasksWidget() {

    const keys = Object.keys(incompleteTasks);
    const data = incompleteTasks;

    const renderList = () => {
        const listItems = [];
        for (let i = 0; i < keys.length; i += 2) {
            listItems.push(
                <StatGroup key={keys[i]}>
                    <div className="col-xl-8 col-md-6 mb-4">
                        <div className="card shadow h-100 py-2" style={{
                            background: (data[keys[i]][1] > data[keys[i]][2]) ? 'linear-gradient(to right,  rgba(106,76,100,1) 0%, rgba(23,46,78,1) 100%)' : "linear-gradient(to right, rgba(36,82,90,1) 0%, rgba(10,35,69,1) 100%)",
                            borderColor: '#fff',
                            borderLeftWidth: '3px',
                            borderLeftColor: (data[keys[i]][1] < data[keys[i]][2]) ? '#1cc88a' : '#e74a3b',
                        }}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="h5 font-weight-bold text-light text-uppercase mb-1">
                                            {data[keys[i]][0]}</div>
                                        <div id="card-earning-monthly-1"
                                            className="text-xs mb-0 font-weight-bold text-light">{data[keys[i]][3]}</div>
                                    </div>
                                    <div className="col-auto">
                                        <div
                                            className="col-auto">{(data[keys[i]][1] < data[keys[i]][2]) ? <i className="fa fa-caret-up fa-2x" style={{
                                                color: '#1cc88a'
                                            }}></i> : <i className="fa fa-caret-down fa-2x" style={{
                                                color: '#e74a3b'
                                            }}></i>}</div>
                                        <div id="card-earning-monthly-1"
                                            className="text-xs mb-0 font-weight-bold text-light"><a href="#"
                                                style={{
                                                    color: (data[keys[i]][1] < data[keys[i]][2]) ? "#1cc88a" : '#F3535A',
                                                    textDecoration: 'underline'
                                                }}>
                                                View Task</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {keys[i + 1] && <div className="col-xl-8 col-md-6 mb-4">
                        <div className="card shadow h-100 py-2" style={{
                            background: (data[keys[i + 1]][1] > data[keys[i + 1]][2]) ? 'linear-gradient(to right,  rgba(106,76,100,1) 0%, rgba(23,46,78,1) 100%)' : "linear-gradient(to right, rgba(36,82,90,1) 0%, rgba(10,35,69,1) 100%)",
                            borderColor: '#fff',
                            borderLeftWidth: '3px',
                            borderLeftColor: (data[keys[i + 1]][1] < data[keys[i + 1]][2]) ? '#1cc88a' : '#e74a3b',
                        }}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="h5 font-weight-bold text-light text-uppercase mb-1">
                                            {data[keys[i + 1]][0]}</div>
                                        <div id="card-earning-monthly-1"
                                            className="text-xs mb-0 font-weight-bold text-light">{data[keys[i + 1]][3]}</div>
                                    </div>
                                    <div className="col-auto justify-content-center">
                                        <div
                                            className="col-auto">{(data[keys[i + 1]][1] < data[keys[i + 1]][2]) ? <i className="fa fa-caret-up fa-2x" style={{
                                                color: '#1cc88a'
                                            }}></i> : <i className="fa fa-caret-down fa-2x" style={{
                                                color: '#e74a3b'
                                            }}></i>}</div>
                                        <div id="card-earning-monthly-1"
                                            className="text-xs mb-0 font-weight-bold text-light"><a href="#" style={{
                                                color: (data[keys[i + 1]][1] < data[keys[i + 1]][2]) ? "#1cc88a" : '#F3535A',
                                                textDecoration: 'underline'
                                            }}>
                                                View Task</a></div>
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
        <div className="col-lg-4 mb-3">
            <div className="card shadow mb-3" style={{
                background: 'rgb(22,26,45)',
                borderColor: '#fff'
            }}>
                <div className="card-header py-3" style={{
                    background: 'rgb(22,26,45)',
                    borderColor: '#fff'
                }}>
                    <h6 className="m-0 font-weight-bold text-light">Pick up where you left off</h6>
                </div>
                <div className="card-body">
                    <div id="second-row" className="chart-area" >
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
                    </div>
                </div>
            </div>
        </div>
    )
}