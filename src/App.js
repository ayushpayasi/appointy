import './App.css';
import NavBar from "./components/navbar.component"
import 'bootstrap/dist/css/bootstrap.min.css';

// sections
import PageHeader from "./components/pageheader.component"
import AcademicSec from "./components/academicsec.component"
import AcademicDetails from "./components/academicdetails.component"
import AppointyIntrgrates from "./components/appointyintegrates.component"
import AppointyUsedWorldWide from "./components/appointyusedworldwide.component"
import Footer from "./components/footer.component"

// assets
import img1 from "./assets/Schools.svg"
import img2 from "./assets/Universities-and-Colleges.svg"
import img3 from "./assets/Professors-Teachers.svg"
import img4 from "./assets/Libraries.svg"
import img5 from "./assets/Tutors.svg"
import img6 from "./assets/Student-Services.svg"
import img7 from "./assets/Test-Centers.svg"
import img8 from "./assets/Educational-Events.svg"

import img9 from "./assets/Calendar-Scheduler-2.svg"
import img10 from "./assets/Class-Reminders.svg"
import img11 from "./assets/Booking-Settings-1.svg"
import img12 from "./assets/Resource-Scheduling-1.svg"
import img13 from "./assets/Team-Management-1.svg"
import img14 from "./assets/Online-prepayments-1.svg"
import img15 from "./assets/Reporting-and-Analytics-2.svg"
import img16 from "./assets/Wellness-Scheduling-App-1.svg"


const academicInstitutionsData=[
  {image:img1,
  heading:"Schools",
  para:`Schools can make class time
  tables, schedule resources,
  organize staff & parent meetings,
  career counseling etc.`},
  {image:img2,
  heading:"Universities & Colleges",
  para:`Institutions can schedule
  academic counseling, advising
  sessions, applicant interviews,
  campus tours, courses, and more`},
  {image:img3,
  heading:"Professors & Teachers",
  para:`Professors can let students book
  1:1 classes, doubt clearing
  sessions, after school activities,
  project mentoring, and more`},
  {image:img4,
  heading:"Libraries",
  para:`Public, school or university
  Libraries can manage bookings of
  study rooms, computer systems,
  hourly reading slots, etc.`},
  {image:img5,
  heading:"Tutors",
  para:`Tutors can schedule in-person or
  online classes, market their
  business, manage students and
  more`},
  {image:img6,
  heading:"Student Services",
  para:`Students can schedule on
  campus tech support, repair
  works, admin enquiries etc. with
  student services`},
  {image:img7,
  heading:"Test Centers",
  para:`Test centers can schedule seats,
  computers, test taking time-slots
  and more`},
  {image:img8,
  heading:"Educational Events",
  para:`Institutions can let attendees
  reserve a seat for science fairs,
  art exhibitions, seminars,
  webinars, conferences, etc.`},
]

const appointyHandlesAdmin = [
  {
   image:img9,
   heading:"Calendar Scheduler",
   para:`See your entire schedule at a
   glance with Appointy's easy-to-
   use calendar with colour-coded
   tiles for teachers and sessions.
   Sync schedule with your
   personal or professional
   calendars so that you're never
   double booked`, 
  },
  {
    image:img10,
    heading:"Class Reminders",
    para:`Send automated email and text
    reminder notifications to
    students prior to a session
    meeting or a class to ensure that
    they don't miss it. Customize
    them to add info like room
    number, location Links, etc.`, 
   },
   {
     image:img11,
     heading:"Resource Scheduling",
     para:`Reserve equipments, lab rooms,
     sports fields, conference halls,
     etc. automatically when a
     session is booked. Save time and
     reduce operational costs that
     come with manually allocating
     resources`, 
    },
    {
      image:img12,
      heading:"Booking Automation",
      para:`Limit number of meetings and
      classes you can take in a
      day/week so that you are not
      overloaded. Choose how much in
      advance anyone can book/cancel,
      set maximum capacity for a class
      or session, and more`, 
     },
     {
       image:img13,
       heading:"Staff Management",
       para:`Boost staff productivity and let
       them view & manage their own
       schedules and sick leaves using
       separate staff logins. Distribute
       sessions across your team
       automatically with intelligent
       staff allocation`, 
      },
     {
       image:img14,
       heading:"Online Prepayments",
       para:`Allow students to pay for your
       classes/sessions when they
       book. Require full/partial fee
       with our payment integrations
       with Stripe, Square, and Paypal
       so that you don't lose out on
       last-minute cancellations`, 
      },
      {
        image:img15,
        heading:"Reporting & Analytics",
        para:`Keep a track on the number of
        classes in a week/month, sales, staff
        utilization, and more. Powerful
        reporting tools help you spot and
        resolve operational inefficiencies and
        help optimize your processes`, 
       },
       {
         image:img16,
         heading:"Scheduling Mobile App",
         para:`Stay on top of upcoming
         appointments and schedule changes
         with Appointy's Android & iOS
         mobile app. You and your staff can
         manage scheduling, payments, and
         reminders even when you are away
         from the desk`, 
        },

]


function App() {
  return (
    <>
    <NavBar/>
    <PageHeader/>
    <AcademicSec 
      data={academicInstitutionsData} 
      heading="academic institutions" 
      subHeading="Appointy can help businesses and institutions in the education, advising and non-profit domain schedule 1:1 sessions, round-robin meetings, and group classes"/>  
    <AcademicDetails/>
    <AcademicSec 
      data={appointyHandlesAdmin}
      heading="Appointy handles your everyday admin so that you can
      focus on increasing student success"
      subHeading="Cost-effective education booking software that streamlines end-to-end operations, reduces no-shows, and
      ensures that your staff isn't overwhelmed"/>
    <AppointyIntrgrates
      heading="Appointy integrates with the apps you already use"
      subHeading="Education scheduling software that integrates with popular payments apps, social media, video conferencing tools, and personal/work calendars"
    />
    <AppointyUsedWorldWide/>
    <Footer/>
    </>
  );
}

export default App;
