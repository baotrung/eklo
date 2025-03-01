import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import { Button } from "@/components/ui/atoms/button";
import Link from "next/link";
import { ToiKeChuyenLogo } from "./logo/toi-ke-chuyen-logo";
import styles from "./toi-ke-chuyen-section.module.scss";

export const ToiKeChuyenSection = () => {
  return (
    <MaxWidthContainer
      containerClassName={styles.container}
      wrapperClassname={styles.wrapper}
    >
      <ToiKeChuyenLogo className={styles.logo} />
      <h3 className={styles.title}>Tôi Kể Chuyện</h3>
      <p>
        Dự án « Tôi kể chuyện » là một chuỗi những buổi trò chuyện và chia sẻ từ
        các khách mời đặc biệt của EKLO, với mong muốn truyền cảm hứng và động
        lực để phát triển bản thân tới các bạn trẻ. Đến với những buổi talk này,
        bạn có cơ hội lắng nghe những trải nghiệm sống và làm việc, cũng như
        giao lưu trực tiếp với những khách mời dày dặn kinh nghiệm trong các
        lĩnh vực đa dạng. Thông qua đó, bạn có thể rút ra cho mình những
      </p>

      <p>
        Với mỗi tháng một chủ đề khác nhau, EKLO mang đến cho bạn câu chuyện
        những người đã hoặc đang học tập và làm việc trong môi trường quốc tế,
        tại Pháp và các quốc gia khác, với background đa dạng, với màu sắc, cái
        tôi và định hướng riêng biệt. Series Tôi kể chuyện đầu tiên xoay quanh
        những câu chuyện và hành trình riêng của từng khách mời để đạt được
        những thành công mà họ có được ở hiện tại. Đến với Tôi kể chuyện 2.0,
        chủ đề lại tập trung nhiều hơn vào các lĩnh vực và ngành nghề khác
      </p>

      <div className={styles["btn-group"]}>
        <Link href="">
          <Button className={styles.btn} color="secondary">
            THAM GIA NGAY
          </Button>
        </Link>
        <Link href="https://www.facebook.com/EkloCoaching/videos">
          <Button className={styles.btn} color="secondary">
            XEM THÊM CHỦ ĐỀ
          </Button>
        </Link>
      </div>
    </MaxWidthContainer>
  );
};
