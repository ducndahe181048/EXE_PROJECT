import Approve from "./approve/Approve"
import BodyC from "./BodyC"
import FeedBack from "./feedback/Feedback"
import StepToCreateAGiftBox from "./step/StepToCreateAGift"

function HomePage() {
  return (
    <div>
      <BodyC />
      <StepToCreateAGiftBox/>
      <FeedBack/>
      <Approve />
    </div>
  )
}

export default HomePage