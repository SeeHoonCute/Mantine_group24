import { Grid, GridCol } from "@mantine/core";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import classes from "./LogIn.module.css";
import { AuthenticationTitle } from "../../components/AuthenticationTitle/AuthenticationTitle";
export const LogIn = ()=>{
    return(
        <Grid>
            <GridCol span={6}><CarouselCard/></GridCol>
            <GridCol span={6}><AuthenticationTitle/></GridCol>
        </Grid>
    );
};