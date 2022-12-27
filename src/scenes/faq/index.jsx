import { Box, useTheme, Typography } from "@mui/material"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme"


const FAQ = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);


   return (
      <Box
         m="20px"
         sx={{
            height: "85vh",
            overflowY: "scroll",

            "&::-webkit-scrollbar": {
               width: "10px"
            },
            "&::-webkit-scrollbar-thumb": {
               background: "#888"
            },
            "&::-webkit-scrollbar-thumb:hover": {
               background: "#555"
            }
         }}
      >
         <Header title="FAQ" subtitle="Frequently Asked Page" />
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
               <Typography color={colors.greenAccent[500]}>
                  An Important question
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Hello From Bassel Home, Before minute we call sari AccordionDetailswe Hello From Bassel Home.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
               <Typography color={colors.greenAccent[500]}>
                  An Important question
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Hello From Bassel Home, Before minute we call sari AccordionDetailswe Hello From Bassel Home.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
               <Typography color={colors.greenAccent[500]}>
                  An Important question
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Hello From Bassel Home, Before minute we call sari AccordionDetailswe Hello From Bassel Home.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
               <Typography color={colors.greenAccent[500]}>
                  An Important question
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Hello From Bassel Home, Before minute we call sari AccordionDetailswe Hello From Bassel Home.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
               <Typography color={colors.greenAccent[500]}>
                  An Important question
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Hello From Bassel Home, Before minute we call sari AccordionDetailswe Hello From Bassel Home.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
               <Typography color={colors.greenAccent[500]}>
                  An Important question
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Hello From Bassel Home, Before minute we call sari AccordionDetailswe Hello From Bassel Home.
               </Typography>
            </AccordionDetails>
         </Accordion>
      </Box>
   )
}


export default FAQ