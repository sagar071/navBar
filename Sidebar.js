import React from "react";
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';
import WorkIcon from '@material-ui/icons/Work';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PlaceIcon from '@material-ui/icons/Place';
import AddIcon from '@material-ui/icons/Add';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';



export const Sidebar = [
    {
        title: "Group Task",
        path: "/grouptask",
        cName: "nav-text",
        icon: <GroupIcon/>
    },
    {
        title: "My tasks",
        path: "/mytask",
        cName: "nav-text",
        icon: <AssignmentIcon/>
    },
    {
        title: "In progress",
        path: "/inprogress",
        cName: "nav-text",
        icon: <WorkIcon/>
    },
    {
        title: "Due soon",
        path: "/duesoon",
        cName: "nav-text",
        icon: <WhatshotIcon/>
    },
    {
        title: "Completed",
        path: "/completed",
        cName: "nav-text",
        icon: <CheckCircleOutlineIcon/>
    },
    {
        title: "Marketplace",
        path: "/marketplace",
        cName: "nav-text",
        icon: <PlaceIcon/>
    },
    {
        title: "New task",
        path: "/newtask",
        cName: "nav-text",
        icon: <AddIcon/>
    },
    


]