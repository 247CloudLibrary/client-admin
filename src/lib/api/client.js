import axios from "axios";


const client = axios.create({
    url: 'http://ecs-alb-167470959.us-east-1.elb.amazonaws.com',
});

export default client;
