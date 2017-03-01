class PhoneValidator < ActiveModel::EachValidator
  def validate_each(object, attribute, value)
    return if object.phone == value
    return if value.blank?
    unless value =~ /\A\+[0-9]+[\s-][0-9]+[\s-][0-9]+\z/
      object.errors[attribute] << (options[:message] || I18n.t('nodes.new.form.location'))
    end
  end
end
