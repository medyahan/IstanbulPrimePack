import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Typography, Paper } from "@mui/material";

const orderStatus = [
  { label: "Sipariş Verildi", completed: true },
  { label: "Üretimde", completed: true },
  { label: "Hazır", completed: false },
  { label: "Kargoya Verildi", completed: false },
  { label: "Teslim Edildi", completed: false },
];

const OrderTimeline = () => {
  return (
    <Paper sx={{ maxWidth: 500, margin: "auto", mt: 3, p: 2 }}>
      <Typography variant="h6" align="center" sx={{ mb: 2 }}>Sipariş Durumu</Typography>
      <Timeline>
        {orderStatus.map((step, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color={step.completed ? "primary" : "grey"} />
              {index !== orderStatus.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{step.label}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
};

export default OrderTimeline;
